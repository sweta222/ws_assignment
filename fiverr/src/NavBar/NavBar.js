import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useHistory } from 'react-router-dom';
import ContainerDashboard from '../ContainerDashboard/dashboardLD';
import {
    Tabs,
    Tab,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'black',
        fontSize: '30px',
        fontWeight: 'bold',
        marginLeft: '50px'
    },
    toolbar: {
        backgroundColor: 'white',
        height: '80px',
        alignContent: 'center'
    },
    btn0: {
        backgroundColor: '#009e60',
        height: '40px',
        fontWeight: 'bold',
        color: 'white'
    },
    btn1: {
        color: 'grey',
        fontSize: '15px',
        fontWeight: 'bold'
    },
    btn2: {
        color: 'grey',
        fontSize: '15px',
        fontWeight: 'bold',
        left: '10px'
    },
    btn3: {
        color: 'grey',
        fontSize: '15px',
        fontWeight: 'bold',
        left: '10px'
    },
    btn4: {
        color: 'grey',
        fontSize: '15px',
        fontWeight: 'bold',
        left: '10px'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: alpha(theme.palette.common.white, 0.15),
        // '&:hover': {
        //     backgroundColor: alpha(theme.palette.common.white, 0.25),
        // },
        backgroundColor: 'whitesmoke',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'grey'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        color: 'grey',
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },
    styles: {
        fontWeight: 'bold', fontSize: '15px', color: 'grey'
    }
}));

//let lists = ['Logo design', 'Brand style guides', 'Buiseness cards'];
let lists = [{ name: "Logo Design", route: "/logo-design" }, { name: "Brand Style", route: "/brand-style" }, { name: "Buiseness Cards", route: "/buiseness-cards" }]
//let lists2 = ['SEO', 'Social Media Marketting'];
let lists2 = [{ name: "Search Engine Opt", route: "/seo" }, { name: "Social Media Marketting", route: "/smm" }];
//let lists3 = ['Translation', 'Resume Writting'];
let lists3 = [{ name: "Translation", route: "/translation" }, { name: "Resume Writting", route: "/resumewrite" }]

function NavBar() {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    const handleTabChange = (e, val) => {
        console.log(val);
        setValue(val);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.title} onClick={() => history.push('/')}>
                        Fiverr
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Find Services"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        //inputProps={{ 'aria-label': 'Find' }}
                        />
                        <Button className={classes.btn0}>Search</Button>
                    </div>
                    <Button className={classes.btn1}>Fivrr buiseness</Button>
                    <Button className={classes.btn2}>Explore</Button>
                    <Button className={classes.btn3}>English</Button>
                    <Button className={classes.btn4}>INR</Button>
                </Toolbar>
            </AppBar>

            <div style={{ width: '100%', height: '50px', backgroundColor: 'whitesmoke' }}>
                <Tabs value={value} onChange={handleTabChange}>
                    <Tab label="Graphics & Design" className={classes.styles}></Tab>
                    <Tab label="Digital Marketing" className={classes.styles}></Tab>
                    <Tab label="Writting & Translation" className={classes.styles}></Tab>
                </Tabs>
                {<TabPanel value={value} index={0}>{lists.map((item, ind) => (<ol key={ind} style={{ fontSize: "20px", color: "black" }} onClick={() => history.push(item.route)}>{item.name}</ol>))}</TabPanel>}
                {<TabPanel value={value} index={1}>{lists2.map((item, ind) => (<ol key={ind} style={{ fontSize: "20px", color: "black" }} onClick={() => history.push(item.route)}>{item.name}</ol>))}</TabPanel>}
                {<TabPanel value={value} index={2}>{lists3.map((item, ind) => (<ol key={ind} style={{ fontSize: "20px", color: "black" }} onClick={() => history.push(item.route)}>{item.name}</ol>))}</TabPanel>}
                {/* <TabPanel value={value} index={0} > item 1 data</TabPanel>
                <TabPanel value={value} index={1}> item 2 data</TabPanel>
                <TabPanel value={value} index={2}> item 3 data</TabPanel> */}
            </div>

        </div>
    );
}
export default NavBar;

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div style={{ height: "50px", width: "100%", backgroundColor: "bisque" }}>
            {value === index && (<h3>{children}</h3>)}
        </div>
    );
}