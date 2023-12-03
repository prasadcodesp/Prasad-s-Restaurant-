import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to Prasad's Resturant</Typography>
        <p>
        Thank you very much. Let him flee if he chooses, and I will reveal all the guilt when it comes to pains, as if they were clear labors. 
        For there is nothing to be refused because one dislikes the pleasures of doing easy things? We are blessed in rejecting them from him, as 
        sometimes they do not know what they want, but they know how to refuse them out of necessity, especially at times. They must be repelled, 
        but how shall I endure them with the greatest labor of pain? But do they not know the truth, those whose desire for flattery is greater than
        that for greater pleasures? When they are freed from the exercise of pleasures, they seek forgiveness. By carrying out the duties of our 
        desert, ours is rougher, but blessed! Let us guide them to be pleasing, to be gentle; often, the pleasure of praising convenience repels us 
        when one is free, yet it is sought after to attain it
        </p>
        <br />
        <p>
        The company itself is very successful. When they are comfortable, they are free to criticize; when they flee, who knows what times they'll 
        be blinded. Being a wise person is less painful, for no one wishes to prevent oneself from avoiding any fault. For those of us who are 
        gentle, neither the pains nor the pleasures of the wise are unknown, so if they are merely distinctions, there is nothing to be endured by
        flattery; they don't know! Will our pleasures end up being repelled, or will our duties be softened in times when pleasure must be borne,
        and further on? But blessed is the one with gentleness!"
        </p>
      </Box>
    </Layout>
  );
};

export default About;
