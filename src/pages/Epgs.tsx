import "../theme/styles.css";
import {Epg, Layout} from "planby";
import {useApp} from "./useApp";
import { Timeline } from "../components/Timeline";
import { ChannelItem } from "../components/ChannelItem";
import { ProgramItem } from "../components/ProgramItem";
import {IonHeader, IonPage, IonToolbar, IonTitle, IonContent} from '@ionic/react';


const Epgs = () => {
    const {isLoading, getEpgProps, getLayoutProps} = useApp();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>EPG</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div>
                    <div style={{height: "80vh", width: "100%"}}>
                        <Epg isLoading={isLoading} {...getEpgProps()}>
                            <Layout
                                {...getLayoutProps()}
                                renderTimeline={(props) => <Timeline {...props} />}
                                renderProgram={({program, ...rest}) => (
                                    <ProgramItem key={program.data.id} program={program} {...rest} />
                                )}
                                renderChannel={({channel}) => (
                                    <ChannelItem key={channel.uuid} channel={channel}/>
                                )}
                            />
                        </Epg>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Epgs;
