import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import moviestation from '../components/Assets/moviestation.png';
import news from '../components/Assets/news.jpeg';
import gamestation from '../components/Assets/gamestation.png';
import feelinglonely from '../components/Assets/feeling-lonely.png';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className='projects-grid'>
                {/* Movie Station */}
               <Card shadow={5} style={{height:'35vh',minWidth:'450', margin:'.7rem'}}>
                   <CardTitle style={{color: '#fff', height: '200px', background: `url(${moviestation}) center / cover`}}>Movie Station</CardTitle>
                   <CardText style={{height: '15vh'}}>
                   This application allows users to create an account where they can then log-in and out of in order to browse, search, and save their preferred newly released movies.
                   </CardText>
                   <CardActions border>
                   <a href='https://github.com/juanmartinez238/juanmoviestation' rel='noopener noreferrer' target='_blank'>
                    <Button colored>GitHub</Button>
                    </a>
                    <a href='https://moviestation.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                        <Button colored>Live Demo</Button>
                    </a>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share"/>
                   </CardMenu>
               </Card>

                {/* News Web Scraper */}
                <Card shadow={5} style={{height:'35vh',minWidth:'450', margin:'.7rem'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: `url(${news}) center / cover`}}>News-Web-Scraper</CardTitle>
                <CardText style={{height: '15vh'}}>
                This application collects articles in an automated fashion from Y combinator on 
								the Hacker News Website that have 100 or more votes.
                </CardText>
                <CardActions border>
                <a href='https://github.com/juanmartinez238/news_scraping' rel='noopener noreferrer' target='_blank'>
                <Button colored>GitHub</Button>
                </a>
                <a href='https://juan-news-scraper.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                    <Button colored>Live Demo</Button>
                </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                {/* Game Station */}
                <Card shadow={5} style={{height:'35vh', minWidth:'450', margin:'.7rem'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: `url(${gamestation}) center / cover`}}>Game Landing Page</CardTitle>
                <CardText style={{height: '15vh'}}>
                Description: This is a landing page designed to attract the most enthusiastic of gamers. 
                </CardText>
                <CardActions border>
                <a href='https://juangamestation.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                    <Button colored>Live Demo</Button>
                </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                {/* Movie Spree */}
                <Card shadow={5} style={{height:'35vh', minWidth:'450', margin:'.7rem'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: `url(https://images.unsplash.com/photo-1577896849786-738ed6c78bd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80) center / cover`}}>KJT Movie Spree</CardTitle>
                <CardText style={{height: '15vh'}}>
                Family entertainment app. The main Page
				consists of a movie plot that the user would then need to guess in order to advance to the next round. 
				There is also a search bar that the user can use if they are stuck. 
                </CardText>
                <CardActions border>
                <a href='https://dry-brook-68206.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                    <Button colored>Live Demo</Button>
                </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                {/* Feeling Lonely */}
                <Card shadow={5} style={{height:'35vh', minWidth:'450', margin:'.7rem'}}>
                <CardTitle style={{color: '#0c0a0b', height: '200px', background: `url(${feelinglonely}) center / cover`}}>Feeling Lonely Chat</CardTitle>
                <CardText style={{height: '15vh'}}>
                This application is essentially a chatroom where the user can submit a message as "Me","Myself", or "I" to
				themselves. If the user gets lonely, they can click the "feeling lonely" button to get a funny Chuck Norris
				joke. 
                
                </CardText>
                <CardActions border>
                <a href='https://github.com/juanmartinez238/feeling-lonely-chat' rel='noopener noreferrer' target='_blank'>
                <Button colored>GitHub</Button>
                </a>
                <a href='https://feeling-lonely-chat.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                    <Button colored>Live Demo</Button>
                </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
            </div>
            )
        }
        // else if(this.state.activeTab === 1) {
        //     return(
        //         <div><h1>This is Other</h1></div>
        //     )
        // }
    }

    render(){
        return(
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                   <Tab>React</Tab> 
                   {/* <Tab>Other</Tab> */}
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className='content'>  {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;