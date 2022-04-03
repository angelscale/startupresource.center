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
  CoreFourCollection,
  ProductsCollection,
  PeopleCollection,
} from './collections';

import 'typeface-rubik';
import 'typeface-space-mono';

const onFirebaseInit = () => {
  getAnalytics();

  // if (window.location.hostname === "localhost") {
  //   connectFirestoreEmulator(getFirestore(), "localhost", 8080);
  //   connectAuthEmulator(getAuth(), "http://localhost:9099");
  //   connectFunctionsEmulator(getFunctions(), "localhost", 5051);
  //   connectStorageEmulator(getStorage(), "localhost", 9199);
  // }
};
const client: SearchClient | undefined = algoliasearch(
  '2OPLL36H7M',
  '4d6a3f1a36a80b12d725d88cad742f65'
);

const firebaseConfig = {
  apiKey: 'AIzaSyC6O3jawP6T71_CE1SX76iMmvo-TuzE6oI',
  authDomain: 'startupresourcecenter.firebaseapp.com',
  databaseURL: 'https://startupresourcecenter-default-rtdb.firebaseio.com',
  projectId: 'startupresourcecenter',
  storageBucket: 'startupresourcecenter.appspot.com',
  messagingSenderId: '245708595165',
  appId: '1:245708595165:web:013395841af4a14c6e6034',
  measurementId: 'G-GK0BMCZDKC',
};

const articlesIndex = client.initIndex('cms_articles');
const coreFourIndex = client.initIndex('cms_core_four');
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
    case 'core-four':
      return performAlgoliaTextSearch(coreFourIndex, searchString);
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
      collections: [
        ArticlesCollection,
        CoreFourCollection,
        ProductsCollection,
        PeopleCollection,
      ],
    };
  };

  const myAuthenticator: Authenticator<FirebaseUser> = async ({
    user,
    authController,
  }) => {
    if (user?.email?.endsWith('@angel-scale.com')) {
      authController.setExtra({ roles: ['admin'] });
    }

    console.log('Allowing access to', user?.email, user);
    return true;
  };

  return (
    <FirebaseCMSApp
      name={'Startup Resource Center'}
      // basePath={'/cms'}
      authentication={myAuthenticator}
      allowSkipLogin={true}
      signInOptions={['password', 'google.com']}
      navigation={navigation}
      textSearchController={textSearchController}
      onFirebaseInit={onFirebaseInit}
      firebaseConfig={firebaseConfig}
    />
  );
}
