import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import { Session } from '../../../store/sessions/types';
import {
  fetchRequest,
  sortByValue,
  filterByValue,
} from '../../../store/sessions/actions';
import Item from './Item';
import Loading from '../../common/Loading';
import OperationsBar from './OperationsBar';

interface PropsFromState {
  loading: boolean;
  data: Session[];
  dataFiltered: Session[];
  errors?: string;
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
  sortByValue: typeof sortByValue;
  filterByValue: typeof filterByValue;
}

class HomePage extends React.Component<PropsFromState & PropsFromDispatch> {
  public componentDidMount() {
    const { fetchRequest: fr } = this.props;
    fr();
  }

  private handleSortByValue = (key: string, direction: string) =>
    this.props.sortByValue(key, direction);

  private handleFilterByValue = (key: string, value: number) =>
    this.props.filterByValue(key, value);

  private renderData() {
    const { data, dataFiltered } = this.props;

    return (
      <>
        {dataFiltered && dataFiltered.length ? (
          dataFiltered.map((session: any, index: number) => (
            <Item {...session} key={index} />
          ))
        ) : (
          <>
            {data &&
              data.length &&
              data.map((session: any, index: number) => (
                <Item {...session} key={index} />
              ))}
          </>
        )}
      </>
    );
  }

  public render() {
    const { loading } = this.props;

    return (
      <>
        <OperationsBar
          handleSortByValue={this.handleSortByValue}
          handleFilterByValue={this.handleFilterByValue}
          data={this.props.data}
        />
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {loading ? (
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Loading />
                </div>
              ) : (
                this.renderData()
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ sessions }: ApplicationState) => ({
  loading: sessions.loading,
  errors: sessions.errors,
  data: sessions.data,
  dataFiltered: sessions.dataFiltered,
});

const mapDispatchToProps = {
  fetchRequest,
  sortByValue,
  filterByValue,
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage);
