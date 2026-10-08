import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { brand } from "../../../theme/theme";
import { firm, practiceAreas } from "../landingData";
import SectionHeading from "./SectionHeading";

const contactItems = [
  { icon: PlaceIcon, label: "Dirección", value: firm.address },
  { icon: PhoneIcon, label: "Teléfono", value: firm.phone },
  { icon: AccessTimeIcon, label: "Urgencias", value: firm.hours },
];

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const text = [
      `Hola María José, soy ${data.name}.`,
      `Quiero consultar por: ${data.area}.`,
      data.message,
      `Mi teléfono: ${data.phone}`,
    ].join("\n");
    window.open(`${firm.whatsappLink}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <Box
      id="contacto"
      component="section"
      sx={{
        py: { xs: 9, md: 14 },
        backgroundColor: brand.surfaceAlt,
        scrollMarginTop: "88px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "5fr 6fr" },
            gap: { xs: 6, md: 10 },
            alignItems: "start",
          }}
        >
          <Stack spacing={4}>
            <SectionHeading
              title="Hablemos de tu caso"
              subtitle="Completá el formulario o escribime por WhatsApp. Te respondo a la brevedad."
              sx={{ mb: 0 }}
            />
            <Stack spacing={3}>
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Stack key={item.label} direction="row" spacing={2} alignItems="flex-start">
                    <Icon sx={{ color: brand.goldText, mt: "2px" }} />
                    <Box>
                      <Typography sx={{ fontSize: "0.85rem", color: brand.muted }}>
                        {item.label}
                      </Typography>
                      <Typography sx={{ color: brand.ink, fontSize: "1.05rem" }}>{item.value}</Typography>
                    </Box>
                  </Stack>
                );
              })}
            </Stack>
            <Box
              sx={{
                borderRadius: 1,
                overflow: "hidden",
                border: `1px solid ${brand.line}`,
                height: 240,
              }}
            >
              <Box
                component="iframe"
                title="Ubicación"
                src={firm.mapEmbed}
                sx={{ border: 0, width: "100%", height: "100%", display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Stack>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
              backgroundColor: brand.ivory,
              borderTop: `3px solid ${brand.gold}`,
              borderRadius: 1,
              p: { xs: 3, md: 5 },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "1fr 1fr" },
                gap: 2,
              }}
            >
              <TextField
                label="Nombre y apellido"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register("name", { required: "Ingresá tu nombre" })}
              />
              <TextField
                label="Teléfono"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
                {...register("phone", { required: "Ingresá tu teléfono" })}
              />
              <TextField
                select
                label="Área de consulta"
                fullWidth
                defaultValue=""
                sx={{ gridColumn: { sm: "span 2" } }}
                {...register("area", { required: "Elegí un área" })}
              >
                {practiceAreas.map((area) => (
                  <MenuItem key={area.title} value={area.title}>
                    {area.title}
                  </MenuItem>
                ))}
                <MenuItem value="Otra">Otra / No estoy seguro</MenuItem>
              </TextField>
              <TextField
                label="Contame brevemente tu situación"
                fullWidth
                multiline
                minRows={4}
                sx={{ gridColumn: { sm: "span 2" } }}
                {...register("message", { required: "Escribí tu consulta" })}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<WhatsAppIcon />}
              fullWidth
              sx={{ mt: 3 }}
            >
              Enviar por WhatsApp
            </Button>
            <Typography sx={{ color: brand.muted, fontSize: "0.85rem", mt: 1.5, textAlign: "center" }}>
              Se abre WhatsApp con tu consulta lista para enviar.
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
