import React, { useEffect, useState } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import { useParams, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import EventPage from "components/EventPage";
import { generateMetadata } from "components/Metadata";

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
        {generateMetadata(eventData?.metadata)}
      </Helmet>
      <EventPage
        titles={eventData.titles}
        subtitle={eventData.subtitle}
        paragraphs={eventData.paragraphs}
        gallery={eventData.gallery}
        onToggleMenu={onToggleMenu}
        onClosePath={onClosePath}
      ></EventPage>
    </>
  );
};

export default Event;
