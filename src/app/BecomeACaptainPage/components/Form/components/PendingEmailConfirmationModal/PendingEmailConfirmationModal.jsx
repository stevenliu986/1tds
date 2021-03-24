import React, { useState } from 'react';
import Button from '../../../../../../components/Button';
import Modal from '../../../../../../components/Modal';
import Input from '../../../../../../components/Input';
import MessageBox from '../../../../../../components/MessageBox';
import resendEmail from '../../../../../../apis/auth/resendEmail';
import Box from '../../../../../../components/Box';
import useApi from '../../../../../../hooks/useApi';

export default function PendingEmailConfirmationModal({
  email,
  onClose,
}) {
  const [httpRequestStatus, setHttpRequestStatus] = useState();

  const onSuccess = ({ status }) => setHttpRequestStatus(status);

  const onFail = (error) => setHttpRequestStatus(error.status);

  const {
    requesting,
    sendRequest,
  } = useApi(() => resendEmail(email), { onSuccess, onFail });

  return (
    <Modal title="验证邮件已发送" onClose={onClose} size="default">
      {httpRequestStatus && (
        <MessageBox variant={(httpRequestStatus !== 201) && 'error'}>
          {{
            201: '已重新发送邮件',
          }[httpRequestStatus] || '邮件发送失败，请稍后再试'}
        </MessageBox>
      )}

      <Box
        fontSize="lg"
        py="lg"
        lineHeight="loose"
        borderBottom="@1"
        borderBottomColor="border"
        textAlign="center"
      >
        验证邮件已发送到您的邮箱
        <br />
        请点击邮件中的确认链接完成验证
      </Box>

      <Box mt="md" fontSize="lg">
        没有收到确认邮件？
      </Box>

      <Box fontSize="lg" my="md" lineHeight="loose">
        <li>
          检查上面邮箱是否正确，若错误请
          <Button variant="link" onClick={onClose}>
            重新注册
          </Button>
        </li>
        <li>
          查看是否在邮箱的垃圾箱中
        </li>
        <li>
          稍等几分钟，若仍收不到邮件，重新发送确认邮件
        </li>
      </Box>

      <Input readOnly value={email} />

      <Box textAlign="center" mt="lg">
        <Button loading={requesting} onClick={sendRequest}>
          重新发送
        </Button>
      </Box>
    </Modal>
  );
}
