class TableExample extends React.Component {
  constructor() {
    super();
    this.selectTabA = this.selectTabA.bind(this);
    this.selectTabB = this.selectTabB.bind(this);
    this.state = {selectedTab: 'a'};
  }

  selectTabA() {
    this.setState({selectedTab: 'a'});
  }

  selectTabB() {
    this.setState({selectedTab: 'b'});
  }

  render() {
    return <ConnectedComponent render={(props) => {
      const { context } = props;
      const { rem, font } = context;
      const { sizes, weights } = font;

      const styles = {
        header: {...sizes.title, ...weights.semibold},
        section: {...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4)}
      }

      return <Panel>
        <PanelHeader>
          <div style={styles.header}>Tables</div>
        </PanelHeader>
        <PanelBody>
          <div style={styles.section}></div>
          <Table>
            <THead>
              <Tr>
                <Th>col1</Th><Th>col2</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr><Td>a</Td><Td>b</Td></Tr>
              <Tr><Td>1</Td><Td>2</Td></Tr>
            </TBody>
          </Table>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }
}
