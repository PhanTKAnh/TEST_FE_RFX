import { useSelector, useDispatch } from "react-redux";
import { updateField, nextStep, prevStep } from "../../action/FormAction";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { step2Schema } from "../../untils/validate";
import TinyEditor from "../TinyEditor";

export default function Step2() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.data);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(step2Schema),
    defaultValues: {
      Education: data.Education || "",
      Skill: data.Skill || "",
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
    <Controller name="Education" control={control}
      render={({ field }) => <TinyEditor label="Education" {...field} />}
    />
    {errors.Education && <p className="msf-error">{errors.Education.message}</p>}
  </div>

  <div className="msf-form-group">
    <Controller name="Skill" control={control}
      render={({ field }) => <TinyEditor label="Skill" {...field} />}
    />
    {errors.Skill && <p className="msf-error">{errors.Skill.message}</p>}
  </div>

  <div className="msf-btn-group">
    <button type="button" className="msf-btn msf-btn-secondary" onClick={() => dispatch(prevStep())}>
      Back
    </button>
    <button type="submit" className="msf-btn msf-btn-primary">Continue</button>
  </div>
</form>

  );
}
