import { useEffect, useState } from "react";
import { Modal, StatusBar } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import { useTheme } from "styled-components/native";

import Back from "../../assets/back.svg"
import { Button } from "../../components/Form/Button";
import { Tag } from "../../components/Tag";
import { getMealByName } from "../../storage/meal/getMealByName";
import { MealDTO } from "../../storage/meal/mealDTO";

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
import { deleteMealByName } from "../../storage/meal/deleteMealByName";

export function MealDetail() {

    const theme = useTheme();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [meal, setMeal] = useState<MealDTO>({} as MealDTO);

    const route = useRoute();
    const {
        name
    } = route.params as MealDTO;

    const navigation = useNavigation();

    function handleDeleteMeal() {
        setIsModalVisible(true);
    }

    function handleCancel() {
        setIsModalVisible(false);
    }

    function handleEditMeal() {
        navigation.navigate("MealManintenance", {
            operation: "EDIT",
            mealName: meal.name
        });
    }

    async function handleConfirmDelete() {
        await deleteMealByName(name);
        navigation.navigate("Home");
    }

    function handleBack() {
        navigation.goBack();
    }

    useEffect(() => {
        async function loadDetail() {
            const meal = await getMealByName(name);
            setMeal(meal);
        }
        loadDetail();
    }, [name]);

    return (
        <Container onDiet={meal.onDiet}>

            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />

            <Header>
                <TitleContainer>
                    <BackContainer onPress={handleBack}>
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
                        {name}
                    </TitleContent>

                    <DetailContent>
                        {meal.description}
                    </DetailContent>

                    <DateTitle>
                        Date e hora
                    </DateTitle>

                    <DateValue>
                        {meal.date ? format(meal.date, "dd/MM/yyyy 'ás' HH:mm") : ""}
                    </DateValue>

                    <Tag onDiet={meal.onDiet} />

                </Info>

                <Buttons>
                    <Button
                        icon="edit"
                        title="Editar refeição"
                        onPress={handleEditMeal}
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
                                        onPress={handleConfirmDelete}
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