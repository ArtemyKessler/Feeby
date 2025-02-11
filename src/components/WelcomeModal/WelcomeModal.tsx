import { Box, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { useTranslation } from 'react-i18next'

interface WelcomeModalProps {
  open: boolean
  handleClose: () => void
}

export const WelcomeModal = ({ open, handleClose }: WelcomeModalProps) => {
  const { t } = useTranslation()

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '20px',
            margin: '20px',
            borderRadius: '20px'
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t('welcomeModal.title')}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {t('welcomeModal.description')}
          </Typography>
        </Box>
      </Box>
    </Modal>
  )
}
