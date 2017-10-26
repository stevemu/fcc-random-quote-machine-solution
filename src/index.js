import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import registerServiceWorker from './registerServiceWorker';
import "./css.css";
import WebFont from "webfontloader";


WebFont.load({
    google: {
        families: ['Droid Sans', 'Droid Serif']
    }
});


const Container = styled.div`
  font-family: "Droid Sans", "Droid Serif";
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  margin: 0 auto; 
  margin-top: 100px;
  width: 500px;
  height: auto;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 50px 50px;
  padding: 30px;
`;

const SocialButton = styled.a`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: darkorange;
  font-size: 30px;
  border-radius: 5px;
`;

const NewQuoteButton = styled(SocialButton)`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
`;

const Quote = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 30px;
`;

const Author = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: end;
  align-self: center;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
`;

const NewQuote = styled.div`
  justify-self: end;
`;

const Credit = styled.div`
  color: white;
  margin-top: 20px;
`;

const quotes = [
    {
        text: "Don't cry because it's over, smile because it happened.",
        by: "Dr.Seuss"
    },
    {
        text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        by: "Marilyn Monroe"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        by: "Albert Einstein"
    },
];

const QuoteLeft = () => {
  return <i style={{marginRight: "10px"}} className="fa fa-quote-left" aria-hidden="true"></i>;
};

class App extends Component {

    state = {
        index: 0
    };

    newQuote = () => {
        const previousIndex = this.state.index;
        let newIndex = Math.floor(Math.random() * 3);
        while (previousIndex === newIndex) {
            newIndex = Math.floor(Math.random() * 3);
        }

        this.setState({index: newIndex});
    };

    render() {
        const quote = quotes[this.state.index];
        const {text, by} = quote;

        return (
            <Container>
                <Box>
                    <Quote><QuoteLeft />{text}</Quote>
                    <Author>- {by}</Author>
                    <Social>
                        <SocialButton style={{marginRight: "10px"}}><span className="typcn typcn-social-twitter"></span></SocialButton>
                        <SocialButton style={{marginRight: "10px"}}><span className="typcn typcn-social-tumbler"></span></SocialButton>
                    </Social>
                    <NewQuote onClick={this.newQuote}>
                        <NewQuoteButton>New quote</NewQuoteButton>
                    </NewQuote>
                </Box>
                <Credit>By Steve Mu</Credit>
            </Container>

        );
    }
}




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
