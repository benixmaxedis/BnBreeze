import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';
import EmptyState from '../components/EmptyState';
import FavoritesClient from './FavoritesClient';

export default async function ListingPage() {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favourites found"
        subtitle="Looks like you have no favourite listings."
      />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
}
