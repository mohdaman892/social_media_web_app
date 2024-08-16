import React from "react";

const Profile = () => {
  const handleSubmit = async (e) => {
    // Replace with your API endpoint
    const url = "http://localhost:5000/social-media-app/profile";

    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  handleSubmit();
  return <></>;
};

export default Profile;
