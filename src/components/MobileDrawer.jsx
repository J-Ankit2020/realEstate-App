import React from 'react'
import {
    Drawer,
    VStack,
    useDisclosure,
    Button,
    Link,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    chakra
} from '@chakra-ui/react'
import { IoMdMenu } from 'react-icons/io';
const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <chakra.div display={{ base: 'block', md: 'none' }}>
            <Button ref={btnRef} onClick={onOpen}>
                <IoMdMenu />
            </Button>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
                size="xs"
            >
                <DrawerContent h='50%'>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <VStack spacing={5}>
                            <Link>Hello</Link>
                            <Link>Hello</Link>
                            <Link>Hello</Link>
                            <Link>Hello</Link>
                            <Link>Hello</Link>
                        </VStack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </chakra.div>
    )
}

export default MobileDrawer