import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Toaster
        position="top-right"
        toastOptions={{
          // Default options for all toasts
          // duration: 3000,
          style: {
            padding: '16px',
            borderRadius: '8px',
            minWidth: '250px',
            textAlign: 'center',
          },
          className: 'animate-toast-slide',

          // Custom options for different types of toasts
          success: {
            style: {
              backgroundColor: 'green',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: 'green',
            },
          },
          error: {
            style: {
              backgroundColor: 'red',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: 'red',
            },
          },
          loading: {
            style: {
              backgroundColor: '#e67e22',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: 'orange',
            },
          },
        }}/>
    </Provider>
  );
}
