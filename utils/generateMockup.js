const API_URL = "https://api.mediamodifier.com/v2/mockup/render";
const API_KEY = process.env.MOCKUP_API; // Replace with your actual MediaModifier API key

const templateIds = {
  tshirt: "514", // Replace with actual template ID
  flyer: "1899", // Replace with actual template ID
  visitingCard: "110818", // Replace with actual template ID
  banner: "128781", // Replace with actual template ID
  standee: "520", // Replace with actual template ID
  cup: "7944",
};

export const generateMockup = async (productType, imageUrl) => {
  const templateId = templateIds[productType];

  const formData = new FormData();
  formData.append("templateId", templateId);
  formData.append("imageUrl", imageUrl);
  formData.append("apiKey", API_KEY);

  const requestOptions = {
    method: "POST",
    body: formData,
  };

  try {
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();

    if (data && data.mockupUrl) {
      return data.mockupUrl;
    } else {
      throw new Error("Failed to generate mockup");
    }
  } catch (error) {
    console.error("Error generating mockup:", error);
    return null;
  }
};
