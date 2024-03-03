import Card from '#/components/Card';
import Container from '#/components/Container';
import Header from '#/components/Header';
import SearchForm from '#/components/SearchForm';

export default function Page() {
  return (
    <main>
      <Header />

      <Container>
        <Card>
          <SearchForm />
        </Card>
        <Card>right card</Card>
      </Container>
    </main>
  );
}
