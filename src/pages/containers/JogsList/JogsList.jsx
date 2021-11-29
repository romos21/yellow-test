import React, {useEffect} from 'react';
import './JogsList.scss';
import JogCard from "../../components/JogCard/JogCard.jsx";
import JogCardCreator from "../../components/JogCardCreator/JogCardCreator";
import {Link} from "react-router-dom";
import PureJogsList from "../../components/PureJogsList/PureJogsList";
import {connect} from "react-redux";
import jogsListService from "../../../services/jogsList";
import {
    actions
} from '../../../redux/actions'
import Loader from "../../components/Loader/Loader";
import paths from "../../../config/router/paths";

const JogsList = (props) => {
    const {loader, loaderViewChange, jogsListSet, jogsList, token} = props;
    useEffect(() => {
        (async function fetchData() {
            loaderViewChange();
            const jogsRes = await jogsListService.getJogs(token);
            jogsListSet(jogsRes);
            loaderViewChange();
        })()
    }, []);

    if (loader) {
        return <Loader/>;
    } else if (!jogsList.length) {
        return (
            <PureJogsList/>
        );
    }
    return (
        <section className='JogsList'>
            {
                jogsList.map(jog =>
                    <Link
                        key={jog.id}
                        to={`${paths.jogs}/${jog.id}`}
                        params={jog.id}
                    >
                        <JogCard jog={jog}/>
                    </Link>
                )
            }
            <Link to={paths.newJog}>
                <JogCardCreator/>
            </Link>
        </section>
    );
}

const mapStateToProps = ({jogs, user, loader}) => {
    return {
        jogsList: jogs.list,
        token: user.token,
        loader: loader.isShowLoader,
    }
}

const mapDispatchToProps = {
    jogsListSet: actions.jogsListActions.jogsListSet,
    loaderViewChange: actions.loaderActions.loaderViewChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(JogsList);
