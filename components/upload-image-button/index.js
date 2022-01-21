import React, { useRef } from "react";
import { Box, Button } from "@chakra-ui/react";

const UploadImageButton = ({ setImage }) => {
  const hiddenFileInput = useRef(null);

  const handleImageUpload = (event) => {
    const target = event.target;
    const file = (target.files )[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataURL = reader.result;

        setImage(dataURL);
      };
    }
  };

  return (
    <Box>
      <Button
        onClick={() => hiddenFileInput.current.click()}
        variantColor="blue"
        colorScheme="blue"
        size="lg"
        leftIcon=""
      >
        Upload an image
      </Button>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        multiple={false}
        ref={hiddenFileInput}
        style={{
          display: "none",
        }}
      />
    </Box>
  );
};

export default UploadImageButton;