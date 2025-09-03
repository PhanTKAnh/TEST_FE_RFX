import { useSelector, useDispatch } from "react-redux";
import { updateField, nextStep, prevStep } from "../../action/FormAction";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { step3Schema } from "../../untils/validate";
import TinyEditor from "../TinyEditor";

export default function Step3() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.data);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(step3Schema),
    defaultValues: {
      Background: data.Background || "",
      Projects: data.Projects|| "",
    },
  });

  const onSubmit = (formData) => {
    console.log("FormData:", formData);
    dispatch(updateField(formData));
    dispatch(nextStep());
  };

  return (
    <form className="msf-form" onSubmit={handleSubmit(onSubmit)}>
  <div className="msf-form-group">
    <Controller name="Background" control={control}
      render={({ field }) => <TinyEditor label="Background" {...field} />}
    />
    {errors.Background && <p className="msf-error">{errors.Background.message}</p>}
  </div>

  <div className="msf-form-group">
    <Controller name="Projects" control={control}
      render={({ field }) => <TinyEditor label="Projects" {...field} />}
    />
    {errors.Projects && <p className="msf-error">{errors.Projects.message}</p>}
  </div>

  <div className="msf-btn-group">
    <button type="button" className="msf-btn msf-btn-secondary" onClick={() => dispatch(prevStep())}>
      Back
    </button>
    <button type="submit" className="msf-btn msf-btn-primary">Continue</button>
  </div>
</form>

//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-3">
//         <Controller
//           name="Background"
//           control={control}
//           render={({ field }) => (
//             <TinyEditor
//               label="Background"
//               {...field}
//             />
//           )}
//         />
//         {errors.Background && (
//           <p className="text-danger">{errors.Background.message}</p>
//         )}
//       </div>

//       <div className="mb-3">
//         <Controller
//           name="Projects"
//           control={control}
//           render={({ field }) => (
//             <TinyEditor
//               label="Projects"
//               {...field}
//             />
//           )}
//         />
//         {errors.Projects&& (
//           <p className="text-danger">{errors.Projects.message}</p>
//         )}
//       </div>
// <button
//   type="button" // không submit form
//   className="btn btn-secondary me-2"
//   onClick={() => dispatch(prevStep())}
// >
//   Back
// </button>
//       <button type="submit" className="btn btn-primary">
// Finish      </button>
//     </form>
  );
}
