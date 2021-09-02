export type ItemProps = {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
};
