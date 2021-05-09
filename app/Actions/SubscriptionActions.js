import { ApiError } from "axe-api";

const onBeforeCreate = async ({ formData }) => {
  formData.created_at = new Date();
  formData.updated_at = new Date();
  // throw new ApiError(406, "Olmadı beybi!");
};

export { onBeforeCreate };
