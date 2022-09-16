import { Redirect, Route } from "react-router-dom";
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {informationCircleSharp, informationCircleOutline, newspaperSharp, newspaperOutline, tvOutline, tvSharp } from "ionicons/icons";
import PlayList from "./PlayList";
import EPG from "./Epgs";

const Tabs: React.FC = () => (
  <IonContent>
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/page" to="/page/list" />
        <Route exact path="/page/list">
          <PlayList />
        </Route>
        <Route exact path="/page/epg">
          <EPG />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/page/list">
          <IonIcon md={tvSharp} ios={tvOutline} />
          <IonLabel>Play List</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/page/epg">
          <IonIcon md={newspaperSharp} ios={newspaperOutline} />
          <IonLabel>EPG</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonContent>
);

export default Tabs;
