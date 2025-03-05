import { Stack, Button, ButtonGroup, styled } from "@mui/material";

const WhiteBorderButtonGroup = styled(ButtonGroup)({
  "& .MuiButtonGroup-grouped:not(:last-of-type)": {
    borderColor: "white",
  },
});

const WhiteButton = styled(Button)({
  color: "white",
});

export const MuiButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <WhiteBorderButtonGroup
        variant="text"
        aria-label="Header button group"
        size="medium"
        color="common"
      >
        <WhiteButton variant="text" href="#">
          TRANG CHỦ
        </WhiteButton>
        <WhiteButton variant="text" href="#">
          TẦNG
        </WhiteButton>
        <WhiteButton variant="text" href="#">
          SỰ KIỆN
        </WhiteButton>
      </WhiteBorderButtonGroup>
    </Stack>
  );
};
