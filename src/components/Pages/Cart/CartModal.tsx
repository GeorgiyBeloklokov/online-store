import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, Grid, TextField } from '@mui/material';

import { useCart } from '../../hooks/useCart';
import { FlowersType } from '../../types/types';

import { styleCartModal } from '../../utils/constants';

export default function CartModal({
  handleClose,
  open,
  setTotalQuantity,
  setCart,
}: {
  handleClose: () => void;
  open: boolean;
  setTotalQuantity: (arg0: number) => void;
  setCart: (arg0: FlowersType[]) => void;
}) {
  const {
    cardHandler,
    nameHandler,
    phoneHandler,
    addressHandler,
    emailHandler,
    cvvHandler,
    validHandler,
    isNameError,
    isPhoneError,
    isAddressError,
    isMailError,
    isCardError,
    isValidToError,
    printImage,
    errorCardValid,
    isCvvError,
    card,
    name,
    phone,
    address,
    email,
    cvv,
    validDataCard,
  } = useCart();

  const [isMessage, setIsMessage] = useState(false);
  const navigate = useNavigate();

  const isValidForm = () => {
    return (
      !isNameError &&
      !isPhoneError &&
      !isAddressError &&
      !isMailError &&
      !isCardError &&
      !isCvvError &&
      !isValidToError
    );
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const isValid = isValidForm();
    if (isValid) {
      setIsMessage(true);
      setTimeout(() => {
        handleClose();
        navigate('/');
        localStorage.clear();
        setTotalQuantity(0);
        setCart([]);
      }, 3000);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Grid item xs={11} sx={styleCartModal}>
            {!isMessage ? (
              <>
                <Typography textAlign={'center'} variant="h6" component="h2">
                  Personal detail
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    error={isNameError}
                    helperText={
                      isNameError ? 'Incorrect entry.' : '2 words whit 3 characters minimum'
                    }
                    value={name}
                    onChange={nameHandler}
                    margin="dense"
                    color="success"
                    label="Name and surname"
                    id="name"
                    size="small"
                    fullWidth
                  />
                  <TextField
                    error={isPhoneError}
                    helperText={
                      isPhoneError ? 'Incorrect entry.' : '+ and 9 characters minimum (+123456789)'
                    }
                    value={phone}
                    onChange={phoneHandler}
                    margin="dense"
                    color="success"
                    id="phone"
                    label="Phone mobile"
                    size="small"
                    fullWidth
                  />
                  <TextField
                    error={isAddressError}
                    helperText={
                      isAddressError ? 'Incorrect entry.' : '3 words whit minimum 5 characters'
                    }
                    value={address}
                    onChange={addressHandler}
                    margin="dense"
                    color="success"
                    id="address"
                    label="Delivery address"
                    size="small"
                    fullWidth
                  />
                  <TextField
                    error={isMailError}
                    helperText={isMailError ? 'Incorrect entry.' : 'enter valid email'}
                    value={email}
                    onChange={emailHandler}
                    margin="dense"
                    color="success"
                    id="email"
                    label="Email"
                    size="small"
                    fullWidth
                  />
                  <Typography textAlign={'center'} variant="h6" component="h2">
                    Credit cards detail
                  </Typography>
                  <TextField
                    error={isCardError}
                    helperText={
                      isCardError
                        ? 'Incorrect entry.'
                        : '16 digits only. 4xxx Visa, 5xxx Master, 3xxx Amex.'
                    }
                    margin="dense"
                    color="success"
                    id="card"
                    value={card}
                    onChange={cardHandler}
                    label="Card"
                    sx={{
                      '.MuiOutlinedInput-root': {
                        padding: '0.4rem',
                      },
                      img: {
                        paddingRight: '0.5rem',
                      },
                    }}
                    size="small"
                    fullWidth
                    inputProps={{ maxLength: 19 }}
                    InputProps={{
                      startAdornment: <img src={printImage} alt="Card" />,
                    }}
                  />

                  <TextField
                    value={validDataCard}
                    onChange={validHandler}
                    error={isValidToError}
                    helperText={isValidToError ? errorCardValid : 'MM/YY'}
                    margin="dense"
                    color="success"
                    id="validTo"
                    label="Valid to"
                    size="small"
                    fullWidth
                  />
                  <TextField
                    error={isCvvError}
                    helperText={isCvvError ? 'Incorrect entry' : 'Enter 3 digits XXX'}
                    value={cvv}
                    onChange={cvvHandler}
                    margin="dense"
                    color="success"
                    id="cvv"
                    label="CVV"
                    size="small"
                    fullWidth
                  />

                  <Button fullWidth type="submit" color="success" variant="outlined">
                    Submit
                  </Button>
                  <Button
                    sx={{ marginTop: 2 }}
                    fullWidth
                    onClick={handleClose}
                    color="success"
                    variant="outlined"
                  >
                    Go back
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Typography textAlign={'center'} variant="h6" component="h2">
                  Order is done !
                </Typography>
              </>
            )}
          </Grid>
        </Fade>
      </Modal>
    </>
  );
}
