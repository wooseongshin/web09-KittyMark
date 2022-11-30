import { Board } from '../types/responseData';

export interface Coordinate {
  latitude: number;
  longitude: number;
}

const getCoord = (bound: naver.maps.Point) => {
  const { x, y } = bound;
  return { latitude: y, longitude: x };
};

const getQueryMapRange = (map: naver.maps.Map) => {
  const bounds = map.getBounds();
  const leftDown = getCoord(bounds.getMin());
  const rightTop = getCoord(bounds.getMax());
  return { leftDown, rightTop };
};

const extractCoord = (boards: Board[]) => {
  const coordList: Coordinate[] = [];
  boards.forEach((board) => {
    const coord = { latitude: board.latitude, longitude: board.longitude };
    coordList.push(coord);
  });
  return coordList;
};

export { getQueryMapRange, extractCoord };
