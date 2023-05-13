export default function ({ token }) {
  if (!token) {
    return (
      <div>
        <h2>This is a members only area. Please log in to view</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Welcome to the members area "{token}"</h2>
      </div>
    );
  }
}

export function getServerSideProps(context) {
  return { props: { token: context.req.cookies.token } };
}
