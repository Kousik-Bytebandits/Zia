// utils/showLoginToast.js
import { toast } from "react-toastify";


export const showLoginToast = (navigate) => {
  toast(
    ({ closeToast }) => (
      <div>
        <p className="mb-2 ">Please login to continue</p>
        <button
          onClick={() => {
            navigate('/login');
            closeToast();
          }}
          style={{
            marginTop: '8px',
            padding: '10px 12px',
            backgroundColor: '#000000',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            zIndex: 1000
          }}
        >
          Login
        </button>
      </div>
    ),
    {
      position: 'top-right',
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    }
  );
};
