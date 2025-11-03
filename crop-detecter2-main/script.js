// ✅ Use your Render backend URL
const backendURL = "https://crop-backend.onrender.com";

// Example: send analysis data
function sendAnalysisData(cropName, diseaseDetected, confidence, description) {
  fetch(`${backendURL}/api/analysis`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cropName,
      diseaseDetected,
      confidence,
      description,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      console.log("✅ Successfully stored in MongoDB:", data);
      alert("Analysis stored successfully!");
    })
    .catch((err) => {
      console.error("❌ Failed to store:", err);
      alert("Failed to send data to server. Please check your internet or backend.");
    });
}
