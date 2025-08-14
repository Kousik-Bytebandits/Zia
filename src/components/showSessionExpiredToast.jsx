import { toast } from "react-toastify";

export const showSessionExpiredToast = (navigate) => {
  // Mark that this is an expired token case
  sessionStorage.setItem("tokenReason", "expired");

  toast(
    ({ closeToast }) => (
      <div>
        <p className="mb-2">Please login again to continue.</p>
        <button
          onClick={() => {
            closeToast();
            navigate('/login');
          }}
          style={{
            marginTop: '8px',
            padding: '10px 12px',
            backgroundColor: '#000000',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
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
