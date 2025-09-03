import { useSelector, useDispatch } from 'react-redux';
import { updateField, nextStep } from '../../action/FormAction';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { step1Schema } from '../../untils/validate';

export default function Step1() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.form.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(step1Schema),
    defaultValues: {
       FullName: data.FullName || "",
      Application: data.Application || "",
      Phone: data.Phone || "",
      Address: data.Address || "",
      LinkGitHub: data.LinkGitHub || "",
      Email: data.Email || "",
    },
  });

  const onSubmit = (formData) => {
    dispatch(updateField(formData));        
    dispatch(nextStep());                  
  };

  return (
<form className="msf-form" onSubmit={handleSubmit(onSubmit)}>
  <div className="msf-form-group">
    <label>Full Name</label>
    <input type="text" className="msf-input" {...register("FullName")} />
    {errors.FullName && <p className="msf-error">{errors.FullName.message}</p>}
  </div>

  <div className="msf-form-group">
    <label>Application</label>
    <input type="text" className="msf-input" {...register("Application")} />
    {errors.Application && <p className="msf-error">{errors.Application.message}</p>}
  </div>

  <div className="msf-form-group">
    <label>Phone</label>
    <input type="tel" className="msf-input" {...register("Phone")} />
    {errors.Phone && <p className="msf-error">{errors.Phone.message}</p>}
  </div>

  <div className="msf-form-group">
    <label>Address</label>
    <input type="text" className="msf-input" {...register("Address")} />
    {errors.Address && <p className="msf-error">{errors.Address.message}</p>}
  </div>

  <div className="msf-form-group">
    <label>GitHub Link</label>
    <input type="text" className="msf-input" {...register("LinkGitHub")} />
    {errors.LinkGitHub && <p className="msf-error">{errors.LinkGitHub.message}</p>}
  </div>

  <div className="msf-form-group">
    <label>Email</label>
    <input type="email" className="msf-input" {...register("Email")} />
    {errors.Email && <p className="msf-error">{errors.Email.message}</p>}
  </div>

  <div className="msf-btn-group">
    <button type="submit" className="msf-btn msf-btn-primary">Continue</button>
  </div>
</form>

  );
}
