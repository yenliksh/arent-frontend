import dynamic from 'next/dynamic';

const Skeleton = dynamic(() => import('../../../components/SkeletonApartmentsList/SkeletonApartmentsList'), {
  ssr: false,
});

export default Skeleton;
