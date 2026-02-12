import { FC, PropsWithChildren, memo } from 'react';
import { SectionId } from '@/data/data';
import Box from '@/components/box';

const Section: FC<
  PropsWithChildren<{
    sectionId: SectionId;
    paddingY?: number;
  }>
> = memo(function Section({ children, sectionId, paddingY }) {
  return (
    // pt is used to offset appbar
    <Box
      component="section"
      id={sectionId}
      sx={{ width: '100%', py: paddingY ?? 4 }}
    >
      <Box sx={{ mx: 'auto', maxWidth: 'lg' }}>{children}</Box>
    </Box>
  );
});

export default Section;
