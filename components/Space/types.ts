export type SpaceDirection = 'horizontal' | 'vertical';

export default interface ISpace {
  direction: SpaceDirection;
  gap: number;
}
