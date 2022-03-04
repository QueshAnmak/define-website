import { spawn } from "child_process";
import { PaperPlaneSubmitButton } from "./PaperPlaneSubmitButton";

export function MailingList ()
{
  return ( <div className='mailing-list'>
    <div className="subscribe-text">
      <h1>Subscribe to our mailing list
      </h1>
      <p>{
        'Sign up to receive updates on our latest news and events'.split( ' ' ).map((word)=>{return <span>{word} </span>})
      }</p>
    </div>
    <div className="email-field">
      <input type="email" placeholder="Enter your email..."/>
      <button type="submit">Subscribe</button>
    </div>
  </div> );
}
