//CoinBody.js
const CoinTableBody = memo(({ rowsPerpage, page, setDataLength }) => {
  const { data, isLoading, update } = useCoinMarket();
  const dataSliced = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  useEffect(() => {
    setDataLength(data.length);
  }, [data.length]);

  return (
    <TableBody>
      {isLoading ? (
        <BodySkeleton rows={rowsPerPage} heads={8} />
      ) : (
        dataSliced.map((row) => (
          <TableRow>
            <TableCell>bitcoin</TableCell>
            <TableCell align="right">$42000</TableCell>
            <TableCell align="right">3%</TableCell>
            <TableCell align="right">2%</TableCell>
            <TableCell align="right">$19200000</TableCell>
            <TableCell align="right">$19200000</TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  );
});


const BodySkeleton = ({ rows, heads }) => {
  const rowArray = Array(rows).fill(null);
  const cellArray = Array(heads).fill(null);
  return rowArray.map((_, index) => (
    <TableRow key={index}>
      {cellArray.map((_, index) => (
        <TableCell key={index} align={index === 1 ? "left" : "right"}>
          {index === 1 ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Skeleton
                variant="circular"
                width={25}
                height={25}
                sx={{ mr: 1 }}
              />
              <Skeleton width={100} />
            </Box>
          ) : (
            <Skeleton />
          )}
        </TableCell>
      ))}
    </TableRow>
  ));
};
export default CoinTableBody;
