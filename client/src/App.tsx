import { Route, Switch } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Careers from "@/pages/Careers";
import MarketingService from "@/pages/services/MarketingService";
import WebsiteService from "@/pages/services/WebsiteService";
import LegalService from "@/pages/services/LegalService";
import AIService from "@/pages/services/AIService";
import StrategyService from "@/pages/services/StrategyService";
import TrainingService from "@/pages/services/TrainingService";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/careers" component={Careers} />
      <Route path="/services/marketing" component={MarketingService} />
      <Route path="/services/website" component={WebsiteService} />
{/*       <Route path="/services/legal" component={LegalService} />
      <Route path="/services/ai" component={AIService} />
      <Route path="/services/strategy" component={StrategyService} />
      <Route path="/services/training" component={TrainingService} /> */}
      <Route path="/blogs" component={Blogs}/>
      <Route path="/blog/:slug" component={Blog}/>
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
