import { User as FirebaseUser } from 'firebase/auth';
import algoliasearch, { SearchClient } from 'algoliasearch';
import {
  Authenticator,
  FirebaseCMSApp,
  FirestoreTextSearchController,
  NavigationBuilder,
  NavigationBuilderProps,
  performAlgoliaTextSearch,
} from '@camberi/firecms';

import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

import {
  ArticlesCollection,
  ProductsCollection,
  PeopleCollection,
} from './collections';

import 'typeface-rubik';
import 'typeface-space-mono';

const onFirebaseInit = () => {
  getAnalytics();

  if (window.location.hostname === 'localhost') {
    const firestore = getFirestore();
    connectFirestoreEmulator(firestore, 'localhost', 8080);
    const auth = getAuth();
    connectAuthEmulator(auth, 'http://localhost:9099');
    const functions = getFunctions();
    connectFunctionsEmulator(functions, 'localhost', 5051);
    const storage = getStorage();
    connectStorageEmulator(storage, 'localhost', 9199);
  }
};
const client: SearchClient | undefined = algoliasearch(
  '2OPLL36H7M',
  '4d6a3f1a36a80b12d725d88cad742f65',
);

const articlesIndex = client.initIndex('cms_articles');
const productsIndex = client.initIndex('cms_products');
const pagesIndex = client.initIndex('cms_pages');
const peopleIndex = client.initIndex('cms_people');

const textSearchController: FirestoreTextSearchController = ({
  path,
  searchString,
}) => {
  switch (path) {
    case 'articles':
      return performAlgoliaTextSearch(articlesIndex, searchString);
    case 'products':
      return performAlgoliaTextSearch(productsIndex, searchString);
    case 'pages':
      return performAlgoliaTextSearch(pagesIndex, searchString);
    case 'people':
      return performAlgoliaTextSearch(peopleIndex, searchString);
    default:
      return undefined;
  }
};

export default function App() {
  const navigation: NavigationBuilder = async ({
    user,
    authController,
  }: NavigationBuilderProps) => {
    return {
      collections: [ArticlesCollection, ProductsCollection, PeopleCollection],
    };
  };

  const myAuthenticator: Authenticator<FirebaseUser> = async ({
    user,
    authController,
  }) => {
    if (user?.email?.endsWith('@angel-scale.com')) {
      authController.setExtra({ roles: ['admin'] });
    }
    console.log('Allowing access to', user?.email);

    return true;
  };

  return (
    <FirebaseCMSApp
      name={'Startup Resource Center'}
      // basePath={'/cms'}
      authentication={myAuthenticator}
      navigation={navigation}
      textSearchController={textSearchController}
      onFirebaseInit={onFirebaseInit}
      // firebaseConfig={firebaseConfig}
    />
  );
}
