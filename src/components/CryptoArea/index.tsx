import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { setData } from "../../actions/actionCreator";
import { RootState } from "../../reducers";

type CompProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const Comp: React.FC<CompProps> = ({ data, setData }) => {

    return (
        <>

        </>
    );
}

const mapStateToProps = ({ reducer: { data } }: RootState) => {
    return {
        data
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
        setData
    },
    dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Comp));