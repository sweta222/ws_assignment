import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        display: 'inline-block',
        //paddingLeft: '20px',
        marginLeft: '10px'
    },
    media: {
        height: 140,
    },
});
const ContainerDashboardLD = () => {
    const classes = useStyles();
    return (
        <div className="next" style={{ height: "300px", width: "100%", backgroundColor: "whitesmoke", marginTop: "150px", color: "grey" }}>
            <h3>Logo design</h3>
            <p>
                Stand out from the crowd with a logo that fits your brand personality.
            </p>
            <h4 style={{ marginTop: "5px" }}>select logo style</h4>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Minimalist
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Watercolor
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    );
};
export default ContainerDashboardLD;