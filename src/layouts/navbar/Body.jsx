import React, { useState } from "react";
import { IconButton, Paper, Box, styled } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import "../../assets/css/Body.module.css";
import CustomizedTables from "../../components/Table";

const DemoPaper = styled(Paper)(({ theme }) => ({}));

function Body() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
  );
}

export default Body;
