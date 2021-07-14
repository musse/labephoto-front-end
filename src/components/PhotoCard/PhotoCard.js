import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import {
  ImgFill,
  MediaDiv,
  PhotoCardContainer,
  PhotoCardContent,
  SubtitleDiv,
} from "./styled";
import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    objectFit: "cover",
    height: "19rem",
    ["@media (max-width: 600px)"]: { height: "280px" },

  },
  container: {
    boxShadow: "none",
    outline: "1px solid grey",
    outlineOffset: "1px",
  },
}));

const PhotoCard = (props) => {
  const classes = useStyles();
  return (
    <PhotoCardContainer className={classes.container}>
      <PhotoCardContent>
        <CardActionArea onClick={props.onClickCard}>
      
            <CardMedia
              component="img"
              alt={props.subtitle}
              image={props.image}
              className={classes.media}
            />
          
          <SubtitleDiv>
            <Typography gutterBottom variant="h6">
              @{props.author}
            </Typography>

            <Typography gutterBottom variant="h5">
              {props.subtitle}
            </Typography>
          </SubtitleDiv>
        </CardActionArea>
      </PhotoCardContent>
    </PhotoCardContainer>
  );
};

export default PhotoCard;
