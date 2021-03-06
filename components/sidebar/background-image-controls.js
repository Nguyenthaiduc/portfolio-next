import React, { useRef } from "react";
import {
  Box,
  Button,
  Image,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { MdFileUpload, MdDelete } from "react-icons/md";

const BackgroundImageControls = ({
  backgroundImage,
  setBackgroundImage,
  previewBackgroundColor,
}) => {
  const hiddenFileInput = useRef(null);

  const handleImageUpload = (event) => {
    const target = event.target ;
    const file = (target.files )[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataURL = reader.result;

        setBackgroundImage(dataURL);
      };
    }
  };

  const backgroundImageNode = () => {
    if (!backgroundImage) {
      return (
        <Box backgroundColor={previewBackgroundColor} h={100} rounded="md" />
      );
    }

    return (
      <Image
        src={backgroundImage}
        alt="Background image"
        rounded="md"
        size="100px"
        objectFit="cover"
        htmlHeight={100}
        mx="auto"
      />
    );
  };

  return (
    <Stack spacing={8}>
      <FormControl>
        <FormLabel htmlFor="background-image">Background Image</FormLabel>
        <Stack spacing={4}>
          {backgroundImageNode()}
          <Stack spacing={0} isInline justifyContent="space-between">
            <Button
              onClick={() => hiddenFileInput.current.click()}
              variantColor="blue"
              leftIcon={MdFileUpload}
              size="sm"
            >
              {!backgroundImage ? "Upload" : "Change"}
            </Button>
            {!!backgroundImage && (
              <Button
                onClick={() => setBackgroundImage("")}
                leftIcon={MdDelete}
                variantColor="red"
                size="sm"
              >
                Remove
              </Button>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              multiple={false}
              ref={hiddenFileInput}
              style={{
                display: "none",
              }}
              id="background-image"
            />
          </Stack>
        </Stack>
      </FormControl>
    </Stack>
  );
};

export default BackgroundImageControls;