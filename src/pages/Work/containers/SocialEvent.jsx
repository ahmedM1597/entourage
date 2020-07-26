import React, { useEffect, useState } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import { useParams, useHistory } from "react-router-dom";
import SocialEventPage from "components/SocialEventPage";
import { Helmet } from "react-helmet";

//const useStyles = makeStyles(theme => ({}));

const Event = ({ onToggleMenu, onClosePath }) => {
  //const classes = useStyles();
  const { event } = useParams({});
  const history = useHistory();
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    async function loadData() {
      if (event) {
        try {
          const eData = await import(`../../../data/${event}.json`);
          if (eData) {
            setEventData(eData);
          } else {
            history.goBack();
          }
        } catch (error) {
          history.goBack();
        }
      } else {
        history.goBack();
      }
    }
    loadData();
  }, [event]);

  return (
    <>
      <Helmet>
        <title>{eventData && eventData.name ? `Entourage - ${eventData.name}` : "Entourage"}</title>
      </Helmet>
      <SocialEventPage
        logo={eventData.logo}
        titles={eventData.titles}
        subtitle={eventData.subtitle}
        content={eventData.content}
        paragraphs={eventData.paragraphs}
        gallery={eventData.gallery}
        onToggleMenu={onToggleMenu}
        onClosePath={onClosePath}
      ></SocialEventPage>
    </>
  );
};

export default Event;
