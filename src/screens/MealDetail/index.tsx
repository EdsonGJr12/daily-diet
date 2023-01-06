import { useState } from "react";
import { Alert, Modal, StatusBar } from "react-native";
import { useTheme } from "styled-components/native";

import Back from "../../assets/back.svg"
import { Button } from "../../components/Form/Button";
import { Tag } from "../../components/Tag";

import {
    BackContainer,
    Container,
    Content,
    Header,
    Title,
    TitleContainer,
    TitleContent,
    DetailContent,
    DateTitle,
    DateValue,
    Buttons,
    Info,
    ModalTitle,
    ModalContainer,
    ModalContent,
    Background,
    ModalButtons,
    ModalButton
} from "./styles";

export function MealDetail() {

    const theme = useTheme();
    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleDeleteMeal() {
        setIsModalVisible(true);
    }

    function handleCancel() {
        setIsModalVisible(false);
    }

    return (
        <Container>

            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />

            <Header>
                <TitleContainer>
                    <BackContainer>
                        <Back fill={theme.COLORS.GRAY_200} />
                    </BackContainer>

                    <Title>
                        Refeição
                    </Title>
                </TitleContainer>
            </Header>

            <Content>

                <Info>
                    <TitleContent>
                        Sanduíche
                    </TitleContent>

                    <DetailContent>
                        Sanduíche de pão integral com atum e salada de alface e tomate
                    </DetailContent>

                    <DateTitle>
                        Date e hora
                    </DateTitle>

                    <DateValue>
                        12/08/2022 ás 16:00
                    </DateValue>

                    <Tag onDiet={false} />

                </Info>

                <Buttons>
                    <Button
                        icon="edit"
                        title="Editar refeição"
                    />

                    <Button
                        icon="delete"
                        title="Excluir refeição"
                        invertColor
                        onPress={handleDeleteMeal}
                    />
                </Buttons>

                <Modal
                    animationType="fade"
                    transparent
                    visible={isModalVisible}
                    statusBarTranslucent
                >

                    <ModalContainer>
                        <Background />
                        <ModalContent>
                            <ModalTitle>
                                Deseja realmente excluir o registro da refeição?
                            </ModalTitle>

                            <ModalButtons>
                                <ModalButton>
                                    <Button
                                        title="Cancelar"
                                        invertColor
                                        onPress={handleCancel}
                                    />
                                </ModalButton>

                                <ModalButton>
                                    <Button
                                        title="Sim, excluir"
                                    />
                                </ModalButton>
                            </ModalButtons>
                        </ModalContent>
                    </ModalContainer>


                </Modal>

            </Content>
        </Container>
    )
}