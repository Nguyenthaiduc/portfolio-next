import React from "react";
import { Stack, FormControl, FormLabel } from "@chakra-ui/react";
import ColorPicker from "../color-picker";

const ColorControls = ({
  previewBackgroundColor,
  setPreviewBackgroundColor,
  browserBackgroundColor,
  setBrowserBackgroundColor,
  browserAddressBarBackgroundColor,
  setBrowserAddressBarBackgroundColor,
}) => {
  return (
    <Stack spacing={8}>
      <FormControl>
        <FormLabel htmlFor="previewBackgroundColor">
          Background Color of Preview window
        </FormLabel>
        <ColorPicker
          color={previewBackgroundColor}
          setColor={setPreviewBackgroundColor}
          id="previewBackgroundColor"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="browserBackgroundColor">
          Background Color of Browser
        </FormLabel>
        <ColorPicker
          color={browserBackgroundColor}
          setColor={setBrowserBackgroundColor}
          id="browserBackgroundColor"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="browserAddressBarBackgroundColor">
          Background Color of Browsers Address Bar
        </FormLabel>
        <ColorPicker
          color={browserAddressBarBackgroundColor}
          setColor={setBrowserAddressBarBackgroundColor}
          id="browserAddressBarBackgroundColor"
        />
      </FormControl>
    </Stack>
  );
};

export default ColorControls;