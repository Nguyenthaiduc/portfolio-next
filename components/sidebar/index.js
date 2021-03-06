import { Box } from "@chakra-ui/react";
import React from "react";
import BackgroundImageControls from "./background-image-controls";
import BrowserControls from "./browser-controls";
import ColorControls from "./color-controls";
import DeviceControls from "./device-controls";
import DownloadAndResetButtons from "./download-and-reset-buttons";
import PreviewWindowControls from "./preview-window-controls";

const Sidebar = ({
  previewBackgroundColor,
  setPreviewBackgroundColor,
  browserBackgroundColor,
  setBrowserBackgroundColor,
  browserAddressBarBackgroundColor,
  setBrowserAddressBarBackgroundColor,
  isBrowserAddressBarVisible,
  setBrowserAddressBarVisibility,
  isBrowserShadowVisible,
  setBrowserShadowVisibility,
  browserShadowSpread,
  setBrowserShadowSpread,
  browserWidth,
  setBrowserWidth,
  isPreviewBackgroundTransparent,
  setPreviewBackgroundTransparent,
  image,
  setImage,
  backgroundImage,
  setBackgroundImage,
}) => {
  return (
    <Box top={0} pos="sticky" height={["auto", "auto", "auto", "100vh"]}>
      <Box
        height={["auto", "auto", "auto", "calc(100vh - 145px)"]}
        overflowY="scroll"
      >
        <Box p={4} borderBottomWidth={1}>
          Upload
        </Box>
        <Box p={4} borderBottomWidth={1}>
          <DeviceControls
            browserWidth={browserWidth}
            setBrowserWidth={setBrowserWidth}
          />
        </Box>
        <Box p={4} borderBottomWidth={1}>
          <ColorControls
            previewBackgroundColor={previewBackgroundColor}
            setPreviewBackgroundColor={setPreviewBackgroundColor}
            browserBackgroundColor={browserBackgroundColor}
            setBrowserBackgroundColor={setBrowserBackgroundColor}
            browserAddressBarBackgroundColor={browserAddressBarBackgroundColor}
            setBrowserAddressBarBackgroundColor={
              setBrowserAddressBarBackgroundColor
            }
          />
        </Box>
        <Box p={4} borderBottomWidth={1}>
          <BrowserControls
            isBrowserAddressBarVisible={isBrowserAddressBarVisible}
            setBrowserAddressBarVisibility={setBrowserAddressBarVisibility}
            isBrowserShadowVisible={isBrowserShadowVisible}
            setBrowserShadowVisibility={setBrowserShadowVisibility}
            browserShadowSpread={browserShadowSpread}
            setBrowserShadowSpread={setBrowserShadowSpread}
          />
        </Box>
        <Box p={4} borderBottomWidth={1}>
          <PreviewWindowControls
            isPreviewBackgroundTransparent={isPreviewBackgroundTransparent}
            setPreviewBackgroundTransparent={setPreviewBackgroundTransparent}
          />
        </Box>
        <Box p={4} borderBottomWidth={1}>
          <BackgroundImageControls
            backgroundImage={backgroundImage}
            setBackgroundImage={setBackgroundImage}
            previewBackgroundColor={previewBackgroundColor}
          />
        </Box>
      </Box>
      <Box
        position={["relative", "relative", "relative", "absolute"]}
        bottom={0}
        p={4}
        w="full"
        borderTopWidth={1}
      >
        <DownloadAndResetButtons image={image} setImage={setImage} />
      </Box>
    </Box>
  );
};

export default Sidebar;
