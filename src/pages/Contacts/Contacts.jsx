import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import PageAppBar from "components/PageAppBar";
import SocialLinks from "components/SocialLinks";
import { generateMetadata } from "components/Metadata";
import contacts from "data/contacts.json";
import seo from "data/seo.json";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    minHeight: "100vh",
    background: "white",
    [theme.breakpoints.down("sm")]: {
      //not sure why 0 causes a horizontal scroll bar
      overflowX: "hidden",
      padding: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  contentContainer: {
    marginTop: theme.spacing(-2),
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    [theme.breakpoints.down("sm")]: {
      marginTop: "unset"
    }
  },
  contactGrid: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    maxWidth: 1600,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(1)
    }
  },
  contactCard: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: theme.spacing(2)
  },
  contactImage: {
    width: "40%",
    maxWidth: 250,
    borderRadius: "50%"
  },
  contactDetails: {
    flex: 1,
    paddingTop: theme.spacing(1),
    marginLeft: theme.spacing(2)
  },
  contactName: {
    fontWeight: "bold"
  },
  contactAddress: {
    marginBottom: theme.spacing(-0.5)
  },
  linksContainer: {
    paddingLeft: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5),
    marginTop: theme.spacing(1.5)
  },
  emailContainer: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    }
  },
  email: {
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
    "&:hover": {
      color: "#4f4c4c"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  },
  socialLinksContainer: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      marginTop: theme.spacing(2)
    }
  }
}));

const ContactCard = ({ name, image, address, phones }) => {
  const classes = useStyles();
  return (
    <div className={classes.contactCard}>
      <img src={image} className={classes.contactImage} alt={name || ""} />
      <div className={classes.contactDetails}>
        <Typography variant="h5" className={classes.contactName}>
          {name}
        </Typography>
        {address &&
          address.map((addressLine, index) => (
            <Typography key={index} variant="subtitle1" className={classes.contactAddress}>
              {addressLine}
            </Typography>
          ))}
        {phones &&
          phones.map((phone, index) => (
            <Typography key={index} variant="subtitle1" className={classes.contactAddress}>
              Tel: {phone}
            </Typography>
          ))}
      </div>
    </div>
  );
};


ContactCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  address: PropTypes.array,
  phones: PropTypes.array
};

const Contacts = ({ onToggleMenu }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{seo.pages.contact.title}</title>
        {generateMetadata(seo.pages.contact)}
      </Helmet>
      <PageAppBar onToggleMenu={onToggleMenu} />
      <div className={classes.contentContainer}>
        <Typography variant="h3">Contact Us</Typography>
        <div className={classes.contactGrid}>
          <Grid container spacing={4}>
            {contacts?.map(contact => (
              <Grid key={contact.name} item xs={12} sm={6} md={4}>
                <ContactCard
                  name={contact.name}
                  image={contact.thumbUrl}
                  address={contact.address}
                  phones={contact.phones}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <Grid container alignItems="center" className={classes.linksContainer}>
          <Grid item xs={12} sm={6} className={classes.emailContainer}>
            <a href="mailto:info@entourageintl.com" className={classes.email}>
              <Typography variant="h4" id="entourage-email-link">
                info@entourageintl.com
              </Typography>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.socialLinksContainer}>
            <SocialLinks />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};


Contacts.propTypes = {
  onToggleMenu: PropTypes.func
};
export default Contacts;
